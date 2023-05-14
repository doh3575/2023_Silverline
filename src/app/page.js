import Contents from "@/components/contents/contents";
import Gradient from "@/components/gradient/gradient";
import Popup from "@/components/popup/popup";

export default function Home() {
  return (
    <main>
      <h3 style={{ marginBottom: "10px" }}>노인안전보행길</h3>
      <h1>Silver Line</h1>
      <Gradient />
      <Contents />
      <Popup />
      <footer className="footer">
        서울시립대학교 2023 공간정보종합설계 22조 김도희 장민
      </footer>
    </main>
  );
}
