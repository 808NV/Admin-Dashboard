declare interface MobileProps {
    closeSidebar: () => void;
}

declare interface HeaderProps {
    title: string;
    description: string;
}

declare interface StatsCardProps {
    title: string;
    total: number;
    currentPeriod: number;
    previousPeriod: number;
}

declare interface TripsCardProps {
    id: string;
    name: string;
    imageUrls: string;
    location: string;
    tags: string[];
    travelStyle: string;
    price: string;
}