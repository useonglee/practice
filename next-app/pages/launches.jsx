// import { useState, useEffect } from "react";

function Launches({ data }) {
  //   const [data, setData] = useState(null);

  //   useEffect(() => {
  //     const fetchLaunches = async () => {
  //       const res = await fetch("https://api.spacexdata.com/v3/launches");
  //       const data = await res.json();

  //       setData(data);
  //     };

  //     fetchLaunches();
  //   }, []);

  if (data === null) {
    return null;
  }

  return (
    <div>
      <ol>
        {data.map((launch, idx) => (
          <li key={idx}>{launch.mission_name}</li>
        ))}
      </ol>
    </div>
  );
}

export default Launches;

// SSG
// export async function getStaticProps() {
//   const res = await fetch("https://api.spacexdata.com/v3/launches");
//   const data = await res.json();

//   console.log("getStaticProps");

//   return {
//     props: { data }, // will be passed to the page component as props
//   };
// }

// SSR
export async function getServerSideProps() {
  const res = await fetch("https://api.spacexdata.com/v3/launches");
  const data = await res.json();

  console.log("서버에서 데이터 fetching => getServerSideProps");

  return {
    props: { data }, // will be passed to the page component as props
  };
}
