import up from '../../../assets/images/arrowUp.svg';
import right from '../../../assets/images/rightIcon.svg';
import TotalAllContent from "../../../components/admin/DashboardComponents/TotalAllContent"
import TransactionSevenDaily from '../../../components/admin/DashboardComponents/TransactionSevenDaily';
import TopDonationCategory from '../../../components/admin/DashboardComponents/TopDonationCategory';
import TopVolunteer from '../../../components/admin/DashboardComponents/TopVolunteer';
import TopArticles from '../../../components/admin/DashboardComponents/TopArticles';
import RegisteredOrganization from '../../../components/admin/DashboardComponents/RegisteredOrganization';

function Dashboard() {
  return (
    <div className="min-h-screen bg-neutral-50 w-full p-5">
      <TotalAllContent />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        <TransactionSevenDaily />
        <RegisteredOrganization />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        <TopDonationCategory />
        <TopVolunteer />
        <TopArticles />
      </div>
    </div>
  );
}

export default Dashboard;
