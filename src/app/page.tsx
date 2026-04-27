import { PageClient } from "@/components/PageClient";
import { getLatestRelease } from "@/lib/github";

export default async function Home() {
  const { version, downloadUrl } = await getLatestRelease();

  return <PageClient version={version} downloadUrl={downloadUrl} />;
}
