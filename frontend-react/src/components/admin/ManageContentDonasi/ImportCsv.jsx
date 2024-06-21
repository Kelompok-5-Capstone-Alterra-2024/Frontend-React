function ImportCsv() {
  return (
    <div className="flex-grow">
      <div className="flex space-x-4 items-center">
        <label className="px-4 py-2 bg-sky-500 text-gray-50 text-sm font-semibold rounded-lg cursor-pointer ml-auto">
          Import CSV
          <input type="file" accept=".csv" className="hidden" />
        </label>
      </div>
    </div>
  );
}

export default ImportCsv;
