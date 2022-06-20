import { useRouter } from "next/router";

export default function BuildPage() {
  const router = useRouter();
  const { buildId } = router.query;

  return <div>{buildId}</div>;
}
