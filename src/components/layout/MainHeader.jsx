const HeaderMain = () => {
  return (
    <header className="header-banner overflow-hidden rounded">
      <div className="overlay"></div>
      <div className="animated-texts overlay-content text-center">
        <h1>
          Welcome to
          <span className="hotel-color py-1 px-2 text-decoration-underline">
            Helsinki Hotel
          </span>
        </h1>
        <h4>Experience the Best Hospitality in Town</h4>
      </div>
    </header>
  );
};

export default HeaderMain;
