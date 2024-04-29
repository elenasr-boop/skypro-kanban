import Column from "../column/column";

const Main = ({cardList}) => {
  return (
    <main className="main">
      <div className="container">
        <div className="main__block">
          <div className="main__content">
            <Column cardList={cardList}></Column>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
