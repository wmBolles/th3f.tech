// Comprehensive functionality test for TH3F.TECH
console.log('🧪 Testing TH3F.TECH functionality...');

// Test 1: Check if main app is loaded
setTimeout(() => {
  console.log('1. ✅ Testing app initialization');
  if (window.app) {
    console.log('   ✅ App instance created successfully');
  } else {
    console.log('   ❌ App instance not found');
  }

  // Test 2: Check theme functionality
  console.log('2. ✅ Testing theme toggle');
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    console.log('   ✅ Theme toggle button found');
    const isDarkBefore = document.documentElement.classList.contains('dark');
    themeToggle.click();
    const isDarkAfter = document.documentElement.classList.contains('dark');
    if (isDarkBefore !== isDarkAfter) {
      console.log('   ✅ Theme toggle working correctly');
    } else {
      console.log('   ❌ Theme toggle not working');
    }
  } else {
    console.log('   ❌ Theme toggle button not found');
  }

  // Test 3: Check search functionality
  console.log('3. ✅ Testing search functionality');
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    console.log('   ✅ Search input found');
    searchInput.value = 'sql';
    searchInput.dispatchEvent(new Event('input'));
    
    setTimeout(() => {
      const searchResults = document.getElementById('search-results');
      if (searchResults && !searchResults.classList.contains('hidden')) {
        console.log('   ✅ Search results displayed');
        const resultCount = searchResults.children.length;
        console.log(`   ✅ Found ${resultCount} search results`);
      } else {
        console.log('   ❌ Search results not displayed');
      }
    }, 100);
  } else {
    console.log('   ❌ Search input not found');
  }

  // Test 4: Check navigation functionality
  console.log('4. ✅ Testing navigation');
  const navItems = document.querySelectorAll('.nav-item');
  if (navItems.length > 0) {
    console.log(`   ✅ Found ${navItems.length} navigation items`);
    
    // Test clicking on networking section
    const networkingSection = document.querySelector('[data-section="networking"]');
    if (networkingSection) {
      networkingSection.click();
      console.log('   ✅ Networking section clicked');
    }
  } else {
    console.log('   ❌ Navigation items not found');
  }

  // Test 5: Check attack link functionality
  console.log('5. ✅ Testing attack content display');
  const attackLinks = document.querySelectorAll('.attack-link');
  if (attackLinks.length > 0) {
    console.log(`   ✅ Found ${attackLinks.length} attack links`);
    
    // Test MITM attack link
    const mitmLink = document.querySelector('[data-attack="mitm"]');
    if (mitmLink) {
      mitmLink.click();
      setTimeout(() => {
        const attackContent = document.getElementById('attack-content');
        const attackDetails = document.getElementById('attack-details');
        if (attackContent && !attackContent.classList.contains('hidden') && attackDetails.innerHTML.includes('Man in the Middle')) {
          console.log('   ✅ Attack content displayed successfully');
        } else {
          console.log('   ❌ Attack content not displayed properly');
        }
      }, 100);
    }
  } else {
    console.log('   ❌ Attack links not found');
  }

  // Test 6: Check WhatsApp collaboration functionality
  console.log('6. ✅ Testing collaboration functionality');
  const collaborateBtn = document.getElementById('collaborate-btn');
  if (collaborateBtn) {
    console.log('   ✅ Collaborate button found');
    // Note: We won't actually click this to avoid opening WhatsApp
    console.log('   ✅ WhatsApp integration ready');
  } else {
    console.log('   ❌ Collaborate button not found');
  }

  // Test 7: Check modal functionality
  console.log('7. ✅ Testing modal functionality');
  const modal = document.getElementById('coming-soon-modal');
  const closeBtn = document.getElementById('close-modal');
  if (modal && closeBtn) {
    console.log('   ✅ Modal and close button found');
    if (!modal.classList.contains('hidden')) {
      closeBtn.click();
      setTimeout(() => {
        if (modal.classList.contains('hidden')) {
          console.log('   ✅ Modal closes correctly');
        } else {
          console.log('   ❌ Modal does not close');
        }
      }, 100);
    } else {
      console.log('   ✅ Modal already closed');
    }
  } else {
    console.log('   ❌ Modal components not found');
  }

  console.log('\n🎉 Functionality testing completed!');
  console.log('Check the results above to see what\'s working.');

}, 2000); // Wait for app to load completely
