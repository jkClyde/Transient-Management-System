import InfoBox from './InfoBox';

const InfoBoxes = () => {
  return (
    <section>
      <div className='container-xl lg:container m-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg'>

          {/* Renter Box - Light Background */}
          <InfoBox
            heading='For Renters'
            backgroundColor='bg-[#F5F6FA]'
            textColor='text-[#23284C]'
            buttonInfo={{
              text: 'Browse Properties',
              link: '/properties',
              backgroundColor: 'bg-[#23284C]',
              textColor: 'text-[#FFFFFF]',
            }}
          >
            Find your dream rental property. Bookmark properties and contact
            owners.
          </InfoBox>

          {/* Property Owner Box - Dark Background */}
          <InfoBox
            heading='For Property Owners'
            backgroundColor='bg-[#F5F6FA]'
            textColor='text-[#23284C]'
            buttonInfo={{
              text: 'Add Property',
              link: '/properties/add',
              backgroundColor: 'bg-[#23284C]',
              textColor: 'text-[#FFFFFF]',
            }}
          >
            List your properties and reach potential tenants. Rent as an Airbnb
            or long term.
          </InfoBox>

        </div>
      </div>
    </section>
  );
};

export default InfoBoxes;
