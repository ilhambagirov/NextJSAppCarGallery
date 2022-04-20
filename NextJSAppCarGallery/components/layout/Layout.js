import MainNavigation from "./MainNavigation";
import classes from "./Layout.module.css";

function Layout(props) {
  return (
    <>
      <div className={classes.headerWrapper}>
        <div className="container">
          <MainNavigation />
        </div>
      </div>
      <main className={classes.main}>{props.children}</main>
    </>
  );
}

export default Layout;
