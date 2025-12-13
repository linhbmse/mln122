import React from 'react';
import { PageContainer, CoverPageContent, ContentPageContent, StarIcon } from './PageDesignSystem';

/**
 * Example: Cover Page using the new Design System
 * This demonstrates how to create a cover page with the vintage book design
 */
export const BookCoverPage = () => (
  <PageContainer side="right">
    <CoverPageContent 
      title="KINH TẾ CHÍNH TRỊ"
      subtitle="MARX - LENIN"
      quote="Nền tảng tư tưởng của chủ nghĩa xã hội khoa học"
      icon={<StarIcon size={80} />}
    />
  </PageContainer>
);

/**
 * Example: Chapter One - Historical Materialism
 */
export const ChapterOne = () => (
  <PageContainer side="left">
    <ContentPageContent 
      number="01"
      title="CHỦ NGHĨA DUY VẬT LỊCH SỬ"
      subtitle="Quan điểm về sự phát triển xã hội"
      points={[
        "Phương thức sản xuất là cơ sở của xã hội",
        "Lực lượng sản xuất quyết định quan hệ sản xuất",
        "Hạ tầng quyết định thượng tầng kiến trúc",
        "Đấu tranh giai cấp là động lực phát triển"
      ]}
    />
  </PageContainer>
);

/**
 * Example: Chapter Two - Theory of Surplus Value
 */
export const ChapterTwo = () => (
  <PageContainer side="right">
    <ContentPageContent 
      number="02"
      title="THUYẾT GIÁ TRỊ THẶNG DƯ"
      subtitle="Bản chất của chế độ tư bản"
      points={[
        "Giá trị hàng hóa do lao động xã hội tạo ra",
        "Giá trị thặng dư là nguồn gốc lợi nhuận tư bản",
        "Người công nhân bị bóc lột sức lao động",
        "Tích lũy tư bản dựa trên chiếm đoạt giá trị thặng dư"
      ]}
      formula="m = v - c"
      formulaDesc="m: giá trị thặng dư | v: tư bản khả biến | c: tư bản bất biến"
    />
  </PageContainer>
);

/**
 * Example: Chapter Three - Law of Value
 */
export const ChapterThree = () => (
  <PageContainer side="left">
    <ContentPageContent 
      number="03"
      title="QUY LUẬT GIÁ TRỊ"
      subtitle="Điều tiết nền kinh tế hàng hóa"
      points={[
        "Giá cả dao động quanh giá trị",
        "Cung - cầu ảnh hưởng đến giá cả thị trường",
        "Cạnh tranh là biểu hiện của quy luật giá trị",
        "Thúc đẩy phát triển lực lượng sản xuất"
      ]}
    />
  </PageContainer>
);

/**
 * Example: Chapter Four - Imperialism
 */
export const ChapterFour = () => (
  <PageContainer side="right">
    <ContentPageContent 
      number="04"
      title="CHỦ NGHĨA ĐẾ QUỐC"
      subtitle="Giai đoạn cao nhất của chủ nghĩa tư bản"
      points={[
        "Sự thống trị của độc quyền và tư bản tài chính",
        "Xuất khẩu tư bản thay cho xuất khẩu hàng hóa",
        "Chia chắn thế giới giữa các liên minh độc quyền",
        "Mâu thuẫn giữa các nước đế quốc ngày càng gay gắt"
      ]}
    />
  </PageContainer>
);

/**
 * Example: Chapter Five - Socialist Revolution
 */
export const ChapterFive = () => (
  <PageContainer side="left">
    <ContentPageContent 
      number="05"
      title="CÁCH MẠNG XÃ HỘI CHỦ NGHĨA"
      subtitle="Con đường giải phóng giai cấp công nhân"
      points={[
        "Xóa bỏ chế độ tư hữu về tư liệu sản xuất",
        "Thiết lập chuyên chính vô sản",
        "Xây dựng kinh tế kế hoạch hóa tập trung",
        "Hướng tới xã hội cộng sản không giai cấp"
      ]}
    />
  </PageContainer>
);

/**
 * Example: Chapter Six - Historical Significance
 */
export const ChapterSix = () => (
  <PageContainer side="right">
    <ContentPageContent 
      number="06"
      title="Ý NGHĨA LỊCH SỬ"
      subtitle="Giá trị học thuyết Marx-Lenin"
      points={[
        "Công cụ phân tích khoa học về xã hội",
        "Nền tảng tư tưởng cho phong trào công nhân",
        "Định hướng cho cách mạng giải phóng dân tộc",
        "Cơ sở lý luận xây dựng CNXH ở Việt Nam"
      ]}
    />
  </PageContainer>
);

/**
 * Example: Back Cover
 */
export const BookBackCover = () => (
  <PageContainer side="left">
    <div className="text-center space-y-8 max-w-2xl">
      <h1 className="text-5xl font-bold text-red-900 tracking-wider"
          style={{fontFamily: 'Georgia, serif'}}>
        KINH TẾ CHÍNH TRỊ
      </h1>
      
      <div className="space-y-4 text-gray-800" style={{fontFamily: 'Georgia, serif'}}>
        <p className="italic text-lg">
          "Tri thức là sức mạnh lớn nhất"
        </p>
        <p className="text-base leading-relaxed">
          Cuốn sách này cung cấp cái nhìn toàn diện về những nguyên lý cơ bản của kinh tế chính trị Mác - Lênin, 
          đây là nền tảng lý thuyết không thể thiếu cho bất cứ ai muốn hiểu rõ về xã hội và lịch sử.
        </p>
      </div>

      <div className="pt-8 border-t-2 border-red-800 mt-8">
        <p className="text-sm text-gray-600 italic" style={{fontFamily: 'Georgia, serif'}}>
          © Lớp Mln122
        </p>
      </div>
    </div>
  </PageContainer>
);

export default {
  BookCoverPage,
  ChapterOne,
  ChapterTwo,
  ChapterThree,
  ChapterFour,
  ChapterFive,
  ChapterSix,
  BookBackCover
};
