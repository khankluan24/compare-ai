/* eslint-disable @next/next/no-img-element */
const Introduction = () => {
  return (
    <section className='section-layout25' id='introduction'>
      <div className='page-padding'>
        <div className='container-large'>
          <div className='padding-vertical'>
            <div className='feature1-wrapper'>
              <div className='w-layout-grid layout25_component'>
                <div className='layout25_content'>
                  <div className='margin-bottom margin-small'>
                    <h2 className='heading' style={{ color: '#FCC65A' }}>
                      Let&apos;s get started
                    </h2>
                  </div>
                  <div className='margin-bottom margin-medium'>
                    <p className='text-size-medium text-color-white'>
                      Acebot is a cutting-edge bot that leads the way in seamless integration and support across multiple blockchains. With a forward-thinking
                      approach, Acebot pioneers the inclusion of new chains, catering to the diverse investment needs of users looking to diversify their
                      portfolios. Its innovative technology provides users with a dynamic and versatile tool to enhance their investment strategies across
                      multiple chains, keeping them ahead in the ever-evolving landscape of cryptocurrency investments. Join Acebot and stay ahead in the world
                      of cryptocurrency investments.
                    </p>
                  </div>
                </div>
                <div className='layout25_image-wrapper'>
                  <a className='w-inline-block w-lightbox' aria-label='open lightbox' aria-haspopup='dialog'>
                    <img
                      src='./banner.png'
                      loading='lazy'
                      sizes='(max-width: 479px) 76vw, (max-width: 767px) 81vw, (max-width: 991px) 83vw, 37vw'
                      srcSet='
                      ./banner.png  500w,
                      ./banner.png  800w,
                      ./banner.png  1017w
                    '
                      alt=''
                      className='image-13'
                    />
                  </a>
                </div>
              </div>
              <div className='w-layout-grid layout25_component is-hidden'>
                <div className='layout25_content'>
                  <div className='margin-bottom margin-xsmall'>
                    <div className='label'>Go Ahead, take profits</div>
                  </div>
                  <div className='margin-bottom margin-small'>
                    <h2 className='heading'>Balanced for Profit Taking with our Dynamic Tax</h2>
                  </div>
                  <div className='margin-bottom margin-medium'>
                    <p className='text-size-medium text-color-white'>
                      {`Our dynamic tax system ensures that no one person can cause massive swings in price. Because fees are adjusted when a transaction affects
                      Sphere's liquidity, we're able to encourage people to take their profits in a way that benefits both the investor and the community.`}
                    </p>
                  </div>
                </div>
                <div className='layout25_image-wrapper'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
