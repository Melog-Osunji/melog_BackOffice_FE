import { useParams } from "react-router-dom";


export default function HarmonyRoomDetailPage() {
    const { roomId } = useParams<{ roomId: string }>();
    return(
    <div>
      <h2>하모니룸 상세</h2>
      <p>roomId: {roomId}</p>
    </div>
    )
}