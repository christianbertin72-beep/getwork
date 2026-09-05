export interface FeatureCard {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Reviewer {
  id: string;
  name: string;
  role: string;
  avatarUrl: string;
}

export interface CategoryCard {
  id: string;
  title: string;
  iconType: 'code' | 'design' | 'mobile' | 'marketing';
  color: string;
}

export interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
  dropdownItems?: { label: string; href: string; description?: string }[];
}
