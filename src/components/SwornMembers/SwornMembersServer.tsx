import { MembersList } from './MembersList';

async function getMembers(urls: string[]) {
  try {
    const members = await Promise.all(
      urls.map(async (url) => {
        const res = await fetch(url, {
          headers: { 'Accept': 'application/json' },
          cache: 'no-store'
        });
        if (!res.ok) throw new Error(`Failed to fetch member: ${res.status}`);
        return res.json();
      })
    );
    return members;
  } catch (error) {
    console.error('Failed to fetch members:', error);
    throw error;
  }
}

export default async function SwornMembersServer({ urls }: { urls: string[] }) {
  if (!urls.length) {
    return <div className="text-gray-400">This house has no sworn members</div>;
  }

  const members = await getMembers(urls);
  return <MembersList members={members} />;
} 