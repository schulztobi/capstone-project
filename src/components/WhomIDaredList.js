export default function Darelist() {
  const [dareData, setDareData] = useState([
    {
      headline: '',
      infotext: '',
    },
  ]);

  useEffect(() => {
    getDares().then((data) => setDareData([...data]));
  }, []);

  // console.log(dareData);

  return (
    <>
      <List>
        {dareData?.map((dare) => {
          return (
            <DareCard key={dare._id} id={dare._id} headline={dare.headline} />
          );
        })}
      </List>
    </>
  );
}
