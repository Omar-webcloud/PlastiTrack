import { PlasticLogForm } from "@/components/dashboard/plastic-log-form";

export default function LogPlasticPage() {
    return (
        <div className="bg-background min-h-screen p-4">
            <div className="text-center pt-8 pb-4">
                <h1 className="text-3xl font-bold text-primary">Log Your Plastic</h1>
                <p className="text-muted-foreground">Track your recycling and earn eco points</p>
            </div>
            <PlasticLogForm />
        </div>
    )
}
