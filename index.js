/* Doplňte do stránky JavaScriptový program, který zařídí, že když uživatel zmáčkne na stránce libovolnou klávesu, na kostce se zobrazí číslo o jedna vyšší. Po šestce zobrazte opět jedničku.

Nápověda: Rozumným postupem je vytvořit si proměnnou side, která bude obsahovat číslo strany kostky. Tuto proměnnou můžete vždy při stisknutí klávesy navýšit o jedna a z této hodnoty zkonstruovat řetězec pro atribut src.*/

let side = 1

const hodit = () => {
  side = side + 1;
  if (side > 6) {
    side = 1;
  }
  const kostkaElement = document.querySelector('.dice');
  kostkaElement.src = "img/side" + side + ".svg"
}


document.addEventListener("keydown", hodit)
