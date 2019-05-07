document.addEventListener(
  "DOMContentLoaded",
  () => {
    console.log(window.dataset);
    const root = document.getElementById("root");
    if (root) {
      const rootVue = new Vue({
        el: "#root",
        data() {
          return {
            data: null,
            dataMore: []
          };
        },
        created() {
          root.style.display = "block";
          const { dataset } = window;
          this.data = dataset;
          if (dataset.length < 9) {
            const numberAddMore = 9 - dataset.length;
            var imagesBase64Seed =
              "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22348%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20348%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_169f8474739%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A17pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_169f8474739%22%3E%3Crect%20width%3D%22348%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22116.7265625%22%20y%3D%22120.3%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E";

            const objectSeed = {
              title: "dongnguyenvie@gmail.com",
              images: imagesBase64Seed,
              description: `This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.`,
              link: "#"
            };
            for (var i = 0, len = numberAddMore; i !== len; i++) {
              this.dataMore.push(objectSeed);
            }
          }
        },
        mounted() {
          console.log(this.dataMore);
        }
      });
    }
  },
  err => {
    alert("browser not support javscript");
  }
);
