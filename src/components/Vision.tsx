import Image from 'next/image';
import { PARTNERS } from '@/constants';

const Vision = () => {
  const renderPartnerItems = PARTNERS.map((el, index) => <Image src={el.LOGO} key={index} className='partner-img' width={120} height={120} alt='' />);

  return (
    <section data-w-id='94bbc353-5ccd-6d20-a2bc-2ea8fb9d20d8' className='section-layout192 margin-vertical margin-xhuge' id='contender'>
      <div className='slanted-bg margin-vertical magin-xhuge'></div>
      <div className='page-padding'>
        <div className='container-large'>
          <div className='padding-vertical'>
            <div id='w-node-f01c669d-f204-6c13-91a9-ddf1ba0c25b9-1c48dc11' className='div-block-5'>
              {renderPartnerItems}
              {/* <Image src={EthereumLogo} className='partner-logo' width={120} height={120} alt=''></Image>
              <Image src={InjectiveLogo} className='partner-logo' width={120} height={120} alt=''></Image>
              <Image src={SolanaLogo} className='partner-logo' width={120} height={120} alt=''></Image>
              <Image src={Avalanche} className='partner-logo' width={120} height={120} alt=''></Image>
              <Image src={PolygonLogo} className='partner-logo' width={120} height={120} alt=''></Image> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
