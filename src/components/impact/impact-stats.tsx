import { Card, CardContent } from "@/components/ui/card";

export function ImpactStats() {
    return (
        <div className="space-y-6">
            <h2 className="text-xl font-bold text-center">Weekly Overview</h2>
            <Card className="rounded-2xl bg-yellow-100 border-none shadow-sm">
                <CardContent className="p-4 space-y-3">
                    <div className="text-center font-bold text-yellow-800">This Week</div>
                    <div className="bg-white/70 rounded-xl p-3 text-center text-yellow-900">
                        You've saved <span className="font-bold">147 plastic items</span> so far.
                    </div>
                    <div className="bg-white/70 rounded-xl p-3 text-center text-yellow-900">
                        That means <span className="font-bold">9.8 kg of carbon emissions</span> reduced.
                    </div>
                    <div className="bg-white/70 rounded-xl p-3 text-center text-yellow-900">
                        And <span className="font-bold">240 litres of clean water</span> preserved.
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
