const Opinions = ({Opinion}) => {
  return (
    <>
      <div className="opinionsBox">
        <p>
        {Opinion.opinion}
        </p>
        <h3>{Opinion.clientName}</h3>
        <h5> {Opinion.JobTitle}</h5>
        <h5> {Opinion.ratings}</h5>
      </div>
    </>
  );
};
export default Opinions;
