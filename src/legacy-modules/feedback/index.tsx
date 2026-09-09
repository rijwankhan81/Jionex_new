import Slider from "react-slick";

const feedback = {
  autoplay: false,
  autoplaySpeed: 2000,
  arrows: true,
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        centerMode: false,
        slidesToScroll: 1,
      },
    },
  ],
};

export default function Feedback({ ...props }) {
  return (
    <>
      {/* <div className="container-fluid Feedback">
          <div className="container">
            <div className="text_black fs64 Head">What our customers say</div>
            <p className="fs35N text_grey2 pHead">Some recent feedback that would allow our case to flourish</p>
          </div>
          <div className="owl2 feedback" id="owl2">
            <Slider {...feedback}>
              <div className="service">
                <div className="item">
                  <div><img src="/images/feedback1.png" className="" /></div>
                  <div className="text_black fs28 itemHead">“The best development service”</div>
                  <p className="fs18 text_grey para2">Lorem ipsum dolor sit amet consectetur.
                    Faucibus integer massa vel facilisis orci risus. Elementum urna eget mauris tempor habitant risus turpis
                    aliquet. Eget.</p>
                  <div className="fs26D text_black">John Carter</div>
                  <p className="text_grey2 fs22D">Entrepreneur</p>
                </div>
              </div>
              <div className="service">
                <div className="item">
                  <div><img src="/images/feedback2.png" className="" /></div>
                  <div className="text_black fs28 itemHead">“The best UI/UX design service”</div>
                  <p className="fs18 text_grey para2">Lorem ipsum dolor sit amet consectetur.
                    Nam in proin viverra justo amet. Malesuada montes vitae sit nisi vitae dui accumsan hendrerit. Consectetur
                    eros non.</p>
                  <div className="fs26D text_black">Darlene Robertson</div>
                  <p className="text_grey2 fs22D">Entrepreneur</p>
                </div>
              </div>
              <div className="service">
                <div className="item">
                  <div><img src="/images/feedback3.png" className="" /></div>
                  <div className="text_black fs28 itemHead">“The best service offered”</div>
                  <p className="fs18 text_grey para2">Lorem ipsum dolor sit amet consectetur.
                    Turpis hac dui nisl malesuada platea. Gravida vulputate pharetra gravida non eget. Consectetur semper cras a
                    morbi.</p>
                  <div className="fs26D text_black">Eleanor Pena</div>
                  <p className="text_grey2 fs22D">Entrepreneur</p>
                </div>
              </div>
              <div className="service">
                <div className="item">
                  <div><img src="/images/feedback3.png" className="" /></div>
                  <div className="text_black fs28 itemHead">“The best service offered”</div>
                  <p className="fs18 text_grey para2">Lorem ipsum dolor sit amet consectetur.
                    Turpis hac dui nisl malesuada platea. Gravida vulputate pharetra gravida non eget. Consectetur semper cras
                    a morbi.</p>
                  <div className="fs26D text_black">Eleanor Pena</div>
                  <p className="text_grey2 fs22D">Entrepreneur</p>
                </div>
              </div>
            </Slider>
          </div>
        </div> */}
    </>
  );
}
