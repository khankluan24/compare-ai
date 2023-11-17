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
                  <div className='margin-bottom margin-xsmall'>
                    <div className='label'>{"Let's Dig In"}</div>
                  </div>
                  <div className='margin-bottom margin-small'>
                    <h2 className='heading'>Start Here to Compare-AI</h2>
                  </div>
                  <div className='margin-bottom margin-medium'>
                    <p className='text-size-medium text-color-white'>
                      CompareAl is an Al platform that provides a versatile digital assistant to cater to your diverse and complex comparison needs. It utilizes
                      artificial intelligence to understand your needs and personal preferences, providing personalized analysis and recommendations. CompareAl
                      believes that the power of data and Al can be used to illuminate every decision, not just in business but also in everyday life. With its
                      technology, CompareAl is committed to giving you the confidence needed to master every choice, at every moment.
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
