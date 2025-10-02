import './QuickActions.css';

const actions = [
  {
    id: 'recharge',
    title: 'Recharge',
    subtitle: '1x coins',
    gradient: 'linear-gradient(135deg, #ffd700 0%, #ffaa00 100%)',
    icon: '📱'
  },
  {
    id: 'google-play',
    title: 'Google Play',
    subtitle: '₹500 back*',
    gradient: 'linear-gradient(135deg, #4285f4 0%, #0d47a1 100%)',
    icon: '▶️'
  },
  {
    id: 'cashbacks',
    title: 'Cashbacks',
    subtitle: '₹500 back*',
    gradient: 'linear-gradient(135deg, #9c27b0 0%, #6a1b9a 100%)',
    icon: '🎁'
  },
  {
    id: 'keeper',
    title: 'Keeper',
    subtitle: '',
    gradient: 'linear-gradient(135deg, #ff6f00 0%, #e65100 100%)',
    icon: '📦'
  }
];

export default function QuickActions() {
  return (
    <div className="quick-actions">
      <div className="actions-scroll">
        {actions.map((action) => (
          <button key={action.id} className="action-card">
            <div className="action-icon-wrapper" style={{ background: action.gradient }}>
              <span className="action-icon">{action.icon}</span>
            </div>
            <div className="action-info">
              <div className="action-title">{action.title}</div>
              {action.subtitle && <div className="action-subtitle">{action.subtitle}</div>}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
