import { useFetch, useSum } from "./Hook";


export const Home = () => {
//   const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");
  const data1 = useSum(1)

  console.log(data1)

  return (
    <>
      {/* {data &&
        data.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })} */}
    </>
  );
};