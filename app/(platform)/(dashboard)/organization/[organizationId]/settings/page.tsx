import { OrganizationProfile } from '@clerk/nextjs';

const SettingPage = () => {
  return (
    <div>
      <div>
        <OrganizationProfile
          appearance={{
            elements: {
              rootBox: { boxShadow: 'none' },
              card: {
                border: '1px solid #e5e5e5',
                boxShadow: 'none',
                width: '100%',
              },
            },
          }}
        />
      </div>
    </div>
  );
};
export default SettingPage;
