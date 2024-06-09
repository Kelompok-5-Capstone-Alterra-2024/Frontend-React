import PaginationDetailOrganizationDonasi from "./PaginationDetailOrganizationDonasi";
import TabelDetailOrganizationDonasi from "./TabelDetailOrganizationDonasi";

const DetailOrganizationDonasi = () => {
    return (
      <div className="pt-5 rounded-lg">
        <TabelDetailOrganizationDonasi/>
        <PaginationDetailOrganizationDonasi/>
      </div>
    );
  };
  
  export default DetailOrganizationDonasi;
