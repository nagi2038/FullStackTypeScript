// import type { FC } from "react";

interface HomeProps {
    label : string
}
export default function Home({label}:HomeProps) {
    return <div> Receieved: {label}</div>
}