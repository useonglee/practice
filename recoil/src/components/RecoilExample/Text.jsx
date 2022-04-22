import { useRecoilState } from "recoil";
import { fontSizeState } from "../../store/fontSize";

function Text() {
  const [fontSize] = useRecoilState(fontSizeState);
  return <p style={{ fontSize }}>This text will increase in size too.</p>;
}

export default Text;
