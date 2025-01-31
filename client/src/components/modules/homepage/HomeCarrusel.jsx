import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import useActivities from "@/hooks/useActivities.js";
import CardEskeleton from "@/components/common/cards/CardEskeleton.jsx";
import Card from "@/components/common/cards/Card.jsx";
import { Pagination } from "swiper/modules";

function HomeCarrusel() {
  const { loading, activities } = useActivities();
  const currentActivities = activities.slice(0, 3);

  if (loading) {
    <CardEskeleton />;
  }

  return (
    <div>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        className="mySwiper "
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
      >
        {currentActivities.map((activity) => (
          <SwiperSlide key={activity.id}>
            <Card activity={activity} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default HomeCarrusel;
