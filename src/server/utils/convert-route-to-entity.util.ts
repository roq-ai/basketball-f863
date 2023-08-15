const mapping: Record<string, string> = {
  organizations: 'organization',
  players: 'player',
  referees: 'referee',
  teams: 'team',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
