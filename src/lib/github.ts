export type GitHubRelease = {
  tag_name: string;
  assets: Array<{
    name: string;
    browser_download_url: string;
  }>;
};

const FALLBACK_DOWNLOAD_URL =
  "https://github.com/gayanbiz/Whatsapp_Desktop_Apk/releases/latest";
const LATEST_RELEASE_API_URL =
  "https://api.github.com/repos/gayanbiz/Whatsapp_Desktop_Apk/releases/latest";

export async function getLatestRelease(): Promise<{
  version: string;
  downloadUrl: string;
}> {
  try {
    const response = await fetch(LATEST_RELEASE_API_URL, {
      headers: {
        Accept: "application/vnd.github+json",
      },
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      return { version: "latest", downloadUrl: FALLBACK_DOWNLOAD_URL };
    }

    const release = (await response.json()) as GitHubRelease;
    const exeAsset = release.assets.find((asset) =>
      asset.name.toLowerCase().endsWith(".exe"),
    );

    if (!exeAsset) {
      return { version: "latest", downloadUrl: FALLBACK_DOWNLOAD_URL };
    }

    const version = release.tag_name.replace(/^v/i, "") || "latest";

    return {
      version,
      downloadUrl: exeAsset.browser_download_url,
    };
  } catch {
    return { version: "latest", downloadUrl: FALLBACK_DOWNLOAD_URL };
  }
}
