export interface MonitoringAPIResponse {
	status: string;
	region: string;
	roles: string[];
	results: Results;
	strict: boolean;
	server_issue: any; //! Needs to be defined later.
}

export interface Results {
	services: Services;
	stats: Stats;
}

export interface Stats {
	servers_count: number;
	online: number;
	session: number;
	server: Server;
}

export interface Server {
	active_connections: number;
	wait_time: number;
	workers: Array<Worker>;
	cpu_load: number;
	timers: number;
}

export interface WorkerData {
	wait_time: number;
	workers: number;
	waiting: number;
	idle: number;
	time_to_return: number;
	recently_blocked_keys: Array<BlockedKeys>;
	top_keys: Array<TopKey>;
}

// ServerName | status(I guess)
export type Services = Record<string, boolean>;

// Worker Name | WorkerData
export type Worker = [string, WorkerData];

//! I guess the meanings of the field, it could be wrong
// Hashcode | Id | Date
export type BlockedKeys = [string, number, string];

// Hashcode | number like 0.15054640352307944
export type TopKey = [string, number];
