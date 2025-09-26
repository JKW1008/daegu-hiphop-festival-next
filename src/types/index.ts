//  아티스트 정보
export interface Artist {
  id: string; //  고유 식별자 (key, React 에서 필수)
  name: string; //  이름
  image: string; //  사진 경로
  day: "saturday" | "sunday"; //  그루핑
}

//  인스타 그램 포스트
export interface InstagramPost {
  id: string;
  image: string; //  이미지 경로
  link: string; //  링크 (클릭시 이동)
}

//  네비게이션 메뉴
export interface NavItem {
  label: string; //  메뉴 표시 텍스트
  href: string; //  주소
  external?: boolean; //  외부 링크 여부
}

//  지도 위치 정보
export interface LocationInfo {
  address: string; //  주소 텍스트
  description: string; //  설명
}
