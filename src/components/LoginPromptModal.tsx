import { useNavigate } from 'react-router-dom';

interface LoginPromptModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LoginPromptModal: React.FC<LoginPromptModalProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <div className="modal-icon">🔒</div>
        <h3>Access Restricted</h3>
        <p>Please create an account or login to access this course.</p>
        <div className="modal-actions">
          <button 
            className="btn btn-outline"
            onClick={() => {
              onClose();
              navigate('/login');
            }}
          >
            Login
          </button>
          <button 
            className="btn btn-primary"
            onClick={() => {
              onClose();
              navigate('/register');
            }}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};
