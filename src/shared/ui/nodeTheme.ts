export interface NodeAccent {
  icon: string;
  border: string;
  borderSoft: string;
  shadow: string;
  handle: string;
  badgeBg: string;
}

const CONTENT_TYPES = ['message', 'media'];
const DATA_TYPES = ['question', 'variables', 'request'];
const CONTROL_TYPES = ['condition', 'transfer_operator'];
const MESSENGER_TYPES = ['whatsapp', 'telegram', 'instagram', 'mail', 'messenger'];
const TRIGGER_TYPES = ['manually', 'webhook', 'github'];

// Note: every Tailwind class below must be spelled out as a complete literal
// string here so the JIT scanner picks it up - dynamically built class names
// (e.g. `hover:${color}`) are invisible to Tailwind and silently produce no CSS.
const ACCENTS: Record<string, NodeAccent> = {
  content: { icon: 'text-[#8be9fd]', border: 'border-[#8be9fd]', borderSoft: 'border-[#8be9fd]/40', shadow: 'shadow-[#8be9fd]/10', handle: 'bg-[#8be9fd]', badgeBg: 'bg-[#8be9fd]/20' },
  data: { icon: 'text-[#bd93f9]', border: 'border-[#bd93f9]', borderSoft: 'border-[#bd93f9]/40', shadow: 'shadow-[#bd93f9]/10', handle: 'bg-[#bd93f9]', badgeBg: 'bg-[#bd93f9]/20' },
  control: { icon: 'text-[#ffb86c]', border: 'border-[#ffb86c]', borderSoft: 'border-[#ffb86c]/40', shadow: 'shadow-[#ffb86c]/10', handle: 'bg-[#ffb86c]', badgeBg: 'bg-[#ffb86c]/20' },
  messenger: { icon: 'text-[#ff79c6]', border: 'border-[#ff79c6]', borderSoft: 'border-[#ff79c6]/40', shadow: 'shadow-[#ff79c6]/10', handle: 'bg-[#ff79c6]', badgeBg: 'bg-[#ff79c6]/20' },
  trigger: { icon: 'text-[#50fa7b]', border: 'border-[#50fa7b]', borderSoft: 'border-[#50fa7b]/40', shadow: 'shadow-[#50fa7b]/10', handle: 'bg-[#50fa7b]', badgeBg: 'bg-[#50fa7b]/20' },
};

export function getNodeAccent(type?: string): NodeAccent {
  if (!type) return ACCENTS.content;
  if (CONTENT_TYPES.includes(type)) return ACCENTS.content;
  if (DATA_TYPES.includes(type)) return ACCENTS.data;
  if (CONTROL_TYPES.includes(type)) return ACCENTS.control;
  if (MESSENGER_TYPES.includes(type)) return ACCENTS.messenger;
  if (TRIGGER_TYPES.includes(type)) return ACCENTS.trigger;
  return ACCENTS.content;
}
