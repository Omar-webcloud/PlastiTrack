import { AppHeader } from "@/components/app-header";
import { PlasticLogForm } from "@/components/dashboard/plastic-log-form";

export default function LogPlasticPage() {
    return (
        <div>
            <AppHeader title="Log Your Plastic" />
            <div className="p-4">
            <p className="text-center text-muted-foreground mb-4">Fill out your recycling entry</p>
            <PlasticLogForm />
            </div>
        </div>
    )
}
