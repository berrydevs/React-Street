import './homepage.module.scss';
export function Homepage(props) {
  return (
    <div class="homepage">
      <div class="directoryMenu">

        {/* Menu item */}
        <div class="menuItem">
          <div class="content">
            <h1 class="title">HATS</h1>
            <span class="subtitle">SHOP NOW</span>
          </div>
        </div>

        <div class="menuItem">
          <div class="content">
            <h1 class="title">JACKETS</h1>
            <span class="subtitle">SHOP NOW</span>
          </div>
        </div>

        <div class="menuItem">
          <div class="content">
            <h1 class="title">SNEAKERS</h1>
            <span class="subtitle">SHOP NOW</span>
          </div>
        </div>

        <div class="menuItem">
          <div class="content">
            <h1 class="title">MENS</h1>
            <span class="subtitle">SHOP NOW</span>
          </div>
        </div>

        <div class="menuItem">
          <div class="content">
            <h1 class="title">WOMENS</h1>
            <span class="subtitle">SHOP NOW</span>
          </div>
        </div>

      </div>
    </div>
  );
}
export default Homepage;
