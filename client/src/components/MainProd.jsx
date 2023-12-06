import { HomeProd } from "../styles/HomeProd.style";
import MainProdItem from "./MainProdItem";
import desert from "../assets/desert.jpg";

function MainProd() {
  return (
    <HomeProd>
      <svg>
        <text
          x="50%"
          y="50%"
          fill="#2a2d34"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          選擇你的最佳良伴！！
        </text>
      </svg>

      <MainProdItem image={desert} title="Golden Retriever" />
    </HomeProd>
  );
}
export default MainProd;
