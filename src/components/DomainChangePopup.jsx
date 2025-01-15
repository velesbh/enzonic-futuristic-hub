import React from 'react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

const DomainChangePopup = ({ isOpen, onClose }) => {
  const handleRedirect = () => {
    window.location.href = 'https://enzonic.com';
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={onClose}>
      <AlertDialogContent className="bg-gray-900 border-gray-800">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-2xl font-bold text-white">Welcome to Our New Design!</AlertDialogTitle>
          <AlertDialogDescription className="text-gray-300">
            We've updated our website with a fresh new look and moved to a new domain. You can continue browsing here or visit our new domain at enzonic.com.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="flex gap-4">
          <AlertDialogAction
            onClick={handleRedirect}
            className="bg-green-600 hover:bg-green-700 text-white"
          >
            Go to enzonic.com
          </AlertDialogAction>
          <AlertDialogAction
            onClick={onClose}
            className="bg-gray-700 hover:bg-gray-600 text-white"
          >
            Stay here
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DomainChangePopup;