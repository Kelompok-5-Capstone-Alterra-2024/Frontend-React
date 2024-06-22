import Swal from "sweetalert2";

function ImportCsv() {
  const accessToken = sessionStorage.getItem('access_token');
  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append('file', file);

      try {
        const response = await fetch('https://capstone-alterra-424313.as.r.appspot.com/api/v1/admin/import-fundraising', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${accessToken}`
          },
          body: formData
        });

        if (response.ok) {
          Swal.fire({
            icon: 'success',
            title: 'Success!',
            text: 'data berhasil ditambahkan',
          });
        } else {
          alert("File upload failed!");
        }
      } catch (error) {
        console.error("Error uploading file:", error);
        alert("An error occurred while uploading the file.");
      }
    }
  };

  return (
    <div className="flex-grow">
      <div className="flex space-x-4 items-center">
        <label className="px-4 py-2 bg-sky-500 text-gray-50 text-sm font-semibold rounded-lg cursor-pointer ml-auto">
          Import CSV
          <input 
            type="file" 
            accept=".csv" 
            className="hidden" 
            onChange={handleFileChange} 
          />
        </label>
      </div>
    </div>
  );
}

export default ImportCsv;
