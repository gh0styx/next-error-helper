'use client';
import { handleLogout } from '@/server/auth';
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
} from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

import { doc, getDoc } from 'firebase/firestore';
import { auth, firestore } from '@/server/firebase/firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';

export default function ProfileButton() {
  const router = useRouter();
  const [userName, setUserName] = useState<string | null>(null);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const onSignOutClick = async () => {
    await handleLogout();
    router.push('/sign-in');
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setIsAuthenticated(true);
        const userDoc = doc(firestore, 'users', user.uid);
        const docSnap = await getDoc(userDoc);

        if (docSnap.exists()) {
          const userData = docSnap.data();
          setUserName(userData.name || 'Unknown');
          setUserEmail(userData.email || 'No email');
        }
      } else {
        setIsAuthenticated(false);
        setUserName(null);
        setUserEmail(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="flex items-center gap-4">
      {isAuthenticated ? (
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              size="sm"
              as="button"
              className="transition-transform"
              src=""
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-12 gap-2">
              <p className="font-semibold">{userEmail || 'Loading...'}</p>
              <p>{userName || 'Loading...'}</p>
            </DropdownItem>
            <DropdownItem key="profile">Profile</DropdownItem>
            <DropdownItem key="settings">Settings</DropdownItem>
            <DropdownItem
              key="sign-out"
              onClick={onSignOutClick}
              color="danger"
            >
              Sign Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      ) : (
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              size="sm"
              as="button"
              className="transition-transform"
              src=""
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Guest Actions" variant="flat">
            <DropdownItem
              key="signIn"
              onClick={() => router.push('/sign-in')}
              color="primary"
            >
              Sign In
            </DropdownItem>
            <DropdownItem
              key="signUp"
              onClick={() => router.push('/sign-up')}
              color="primary"
            >
              Sign Up
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      )}
    </div>
  );
}
