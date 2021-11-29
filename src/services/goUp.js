export default function goUp() {
   const top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
   if(top > 0) {
      window.scrollBy(0,-2000);
   } else return;
}