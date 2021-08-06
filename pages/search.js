import Head from "next/head";
import { useRouter } from "next/router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { format } from "date-fns";
import InfoCard from "../components/InfoCard";
import Map from "../components/Map";

const Search = ({ searchResult }) => {
  const router = useRouter();
  const { location, startDate, endDate, noOfGuests } = router.query;
  const startDateFind = format(new Date(startDate), "dd MMMM yy");
  const endDateFind = format(new Date(endDate), "dd MMMM yy");
  const range = `${startDateFind} - ${endDateFind}`;

  return (
    <div>
      <Head>
        <title>Airbnb-Search</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header placeholder={`${location} | ${range} | ${noOfGuests} guests`} />
      <main className="flex">
        <section className="flex-grow px-6 pt-14">
          <p className="text-xs">
            300+ Stays - {range} - for {noOfGuests} guests {noOfGuests}
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>
          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Types of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More Filters</p>
          </div>
          {searchResult?.map(
            ({ img, location, title, description, star, price, total }) => (
              <InfoCard
                key={img}
                img={img}
                title={title}
                description={description}
                price={price}
                location={location}
                star={star}
                total={total}
              />
            )
          )}
        </section>
        <section className="hidden xl:inline-flex xl:min-w-[600px] min-h-[600px]">
          <Map searchResult={searchResult}/>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Search;

export async function getServerSideProps(context) {
  const searchResult = await fetch("https://links.papareact.com/isz").then(
    (res) => res.json()
  );

  return {
    props: {
      searchResult,
    },
  };
}
