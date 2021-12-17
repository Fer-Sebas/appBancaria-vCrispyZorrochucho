import { Card } from './Cards'
import ReportTransacctionForm from './ReportTransacction.Form'

function ReportTransacction() {
    return (
        <Card 
            title="Reportar Transacción" 
            body="Indicanos la razón por la cual esta transacción es fradulenta"
        >
            <ReportTransacctionForm />
        </Card>
    )
}

export default ReportTransacction