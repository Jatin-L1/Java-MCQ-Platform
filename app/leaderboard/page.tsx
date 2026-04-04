"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Home, Medal, RotateCcw, Trophy } from "lucide-react";

type LeaderboardEntry = {
	score: number;
	total: number;
	percentage: number;
	createdAt: string;
};

export default function LeaderboardPage() {
	const [entries, setEntries] = useState<LeaderboardEntry[]>([]);

	useEffect(() => {
		const raw = localStorage.getItem("mockLeaderboard");
		if (!raw) return;

		try {
			const parsed = JSON.parse(raw) as LeaderboardEntry[];
			setEntries(parsed);
		} catch {
			setEntries([]);
		}
	}, []);

	const clearLeaderboard = () => {
		localStorage.removeItem("mockLeaderboard");
		setEntries([]);
	};

	return (
		<div className="min-h-screen bg-[radial-gradient(circle_at_15%_15%,#22d3ee26,transparent_32%),radial-gradient(circle_at_80%_10%,#3b82f626,transparent_32%),linear-gradient(150deg,#0b1220,#111827_52%,#0f172a)] py-12">
			<div className="max-w-4xl mx-auto px-4">
				<Card className="border-0 bg-slate-900/70 backdrop-blur-sm text-white shadow-2xl mb-6">
					<CardHeader className="text-center">
						<div className="mx-auto mb-4 h-16 w-16 rounded-full border border-cyan-300/30 bg-cyan-300/10 flex items-center justify-center">
							<Trophy className="h-8 w-8 text-cyan-300" />
						</div>
						<CardTitle className="text-3xl bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
							Mock Test Leaderboard
						</CardTitle>
						<p className="text-slate-300 text-sm">Top recent performances from this browser</p>
					</CardHeader>
				</Card>

				<Card className="border-0 bg-slate-900/70 backdrop-blur-sm text-white shadow-2xl">
					<CardContent className="pt-6">
						{entries.length === 0 ? (
							<div className="text-center py-10">
								<p className="text-slate-300 mb-4">No mock test scores yet.</p>
								<Link href="/mock-test">
									<Button className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white">
										Start Your First Mock
									</Button>
								</Link>
							</div>
						) : (
							<div className="space-y-3">
								{entries.map((entry, index) => (
									<div
										key={`${entry.createdAt}-${index}`}
										className="rounded-xl border border-slate-700 bg-slate-800/70 p-4 flex items-center justify-between"
									>
										<div className="flex items-center gap-3">
											<div className="h-9 w-9 rounded-full bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center text-cyan-300 font-semibold">
												{index + 1}
											</div>
											<div>
												<p className="font-semibold text-slate-100">{entry.score} / {entry.total}</p>
												<p className="text-xs text-slate-400">
													{new Date(entry.createdAt).toLocaleString()}
												</p>
											</div>
										</div>
										<div className="flex items-center gap-2">
											{index < 3 && (
												<Medal className={`h-4 w-4 ${index === 0 ? "text-yellow-400" : index === 1 ? "text-slate-300" : "text-amber-700"}`} />
											)}
											<Badge className="bg-cyan-500/20 text-cyan-200 border border-cyan-300/20">
												{entry.percentage}%
											</Badge>
										</div>
									</div>
								))}
							</div>
						)}

						<div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
							<Link href="/">
								<Button variant="outline" className="border-slate-600 text-slate-200 hover:bg-slate-800">
									<Home className="h-4 w-4 mr-2" />
									Home
								</Button>
							</Link>
							<Button variant="outline" onClick={clearLeaderboard} className="border-slate-600 text-slate-200 hover:bg-slate-800">
								<RotateCcw className="h-4 w-4 mr-2" />
								Clear Scores
							</Button>
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
