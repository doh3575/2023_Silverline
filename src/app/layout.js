import "./globals.css";

export const metadata = {
  title: "Silver Line",
};

const url = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAO_MAPS_API_KEY}&libraries=services,clusterer&autoload=false`;

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head>
        <script src={url} defer />
      </head>
      <body>{children}</body>
    </html>
  );
}
