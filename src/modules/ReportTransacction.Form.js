function ReportTransacctionForm() {

    return (
      <form name="ReportTransacctionForm" id="ReportTransacctionForm">
          
          <div className="fieldGroup">
            <label for="reportDescription">Describe aqui tu caso</label>
            <textarea type="text" title="reportDescription" />
          </div>
            
          <button className="main">Enviar</button>
          
      </form>
    );
  
  }
  
  export default ReportTransacctionForm;