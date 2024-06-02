import { OrgControl } from './_component/OrgControl';

const OrganizationLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <OrgControl />
      {children}
    </>
  );
};
export default OrganizationLayout;
